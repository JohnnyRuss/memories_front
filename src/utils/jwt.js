import { MEMORIES_PASSPORT_KEY } from "config/config";

export function setPassport(passport) {
  localStorage.setItem(MEMORIES_PASSPORT_KEY, passport);
}

export function removePassport() {
  localStorage.removeItem(MEMORIES_PASSPORT_KEY);
}

export function getPassport() {
  localStorage.getItem(MEMORIES_PASSPORT_KEY);
}
