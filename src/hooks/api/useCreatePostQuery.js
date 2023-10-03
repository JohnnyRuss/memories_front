/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as postSelectors from "store/selectors/postSelectors";
import { selectCurrentUserId } from "store/selectors/authSelectors";

import { useIsAuthenticatedUser } from "hooks/auth";
import { postActions } from "store/reducers/postsSlice";
import { createPostQuery, updatePostQuery } from "store/thunks/posts.thunk";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidation } from "utils/validation/postValidation";

export default function useCreatePostQuery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editingPost = useSelector(postSelectors.selectEditingPost);
  const status = useSelector(postSelectors.selectCreatePostLoadingStatus);

  const currentUserId = useSelector(selectCurrentUserId);

  const { isAuthenticated } = useIsAuthenticatedUser({
    checkOnMount: true,
    redirectUnAuthorized: false,
  });

  const defaultForm = { title: "", text: "", tags: "", image: "" };
  const form = useForm({
    resolver: zodResolver(postValidation),
    defaultValues: defaultForm,
  });

  function onImageChange({ event, fieldChangeEvent }) {
    event.preventDefault();

    const imageFile = event.target.files?.[0];

    if (!imageFile || !imageFile.type.includes("image")) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);

    fileReader.onload = async (e) => {
      const imageUrl = e.target.result.toString() || "";
      fieldChangeEvent(imageUrl);
    };
  }

  async function onSubmit(values) {
    if (!isAuthenticated) return navigate("/auth/sign-in");

    if (Object.values(editingPost)[0]) {
      await dispatch(
        updatePostQuery({ params: { postId: editingPost._id }, data: values })
      ).unwrap();

      form.reset(defaultForm);
      dispatch(postActions.clearPostToEdit());
    } else {
      if (!currentUserId) return;

      await dispatch(
        createPostQuery({
          ...values,
          tags: values.tags.split("#").filter((part) => part !== ""),
          author: currentUserId,
        })
      ).unwrap();
      form.reset();
    }
  }

  useEffect(() => {
    if (!Object.values(editingPost)[0]) return;

    form.reset({
      title: editingPost.title || "",
      text: editingPost.text || "",
      tags: editingPost.tags || "",
      image: editingPost.image || "",
    });
  }, [editingPost]);

  return { isAuthenticated, status, form, onImageChange, onSubmit };
}
