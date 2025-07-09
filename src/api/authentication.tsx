import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // todo format error
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};

export const firebaseSigninUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // todo format error
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};

export const firebaseLogoutUser = async () => {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // todo format error
    return {
      error: { code: firebaseError.code, message: firebaseError.message },
    };
  }
};

export const sendEmailToResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // @todo correction renvoie toujours data: true
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};

export const sendEmailVerificationProcedure = async () => {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      // @todo format error
      return {
        error: {
          code: firebaseError.code,
          message: firebaseError.message,
        },
      };
    }
  } else {
    return {
      error: {
        code: "unknow",
        message: "une erreur est survenue",
      },
    };
  }
};
