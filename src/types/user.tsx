import { Timestamp } from "firebase/firestore";

export interface UserInterface {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  userDocument?: UserDocument;
}

export interface UserDocument {
  uid: string;
  how_did_hear: string;
  email: string;
  creation_date: Timestamp;
}
