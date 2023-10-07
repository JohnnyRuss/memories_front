import { Skeleton, Box, Typography } from "@mui/material";

export default function PostCardSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={200}
        sx={{ marginBottom: "8px" }}
      />

      <Typography variant="body2" component="h2" gutterBottom>
        <Skeleton variant="text" />
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        <Skeleton variant="text" />
      </Typography>

      <Typography variant="body2" component="h2">
        <Skeleton variant="text" />
      </Typography>
      <Typography variant="body2" component="h2">
        <Skeleton variant="text" />
      </Typography>
      <Typography variant="body2" component="h2">
        <Skeleton variant="text" />
      </Typography>
      <Typography variant="body2" component="h2">
        <Skeleton variant="text" />
      </Typography>
    </Box>
  );
}
