import { statusCodes } from "@react-native-google-signin/google-signin";

export const getFirebaseAuthErrorUtility = (error: any) => {
  const { code, message } = error ?? {};
  if (!code) return message;
  switch (code) {
    case "auth/wrong-password":
      return "Los datos son inválidos";
    case "auth/user-not-found":
      return "No existe un registro de usuario con el correspondiente identificador provisto";
    case "auth/too-many-requests":
      return "Demasiadas solicitudes. El acceso a esta cuenta se ha inhabilitado temporalmente";
    case "auth/email-already-in-use":
      return "El correo electrónico provisto ya está en uso";
    case "auth/network-request-failed":
      return "Ha ocurrido un error de conexión, intenta nuevamente";
    case "auth/operation-not-allowed":
      return "El proveedor está deshabilitado en tu proyecto de firebase";
    case "auth/invalid-action-code":
      return "El link usado es inválido";
    case "auth/account-exists-with-different-credential":
      return "Ya existe una cuenta con el mismo correo electrónico pero con diferentes credenciales de autenticación";
    case "auth/user-disabled":
      return "Su cuenta ha sido deshabilitada";
    case "auth/invalid-email":
      return "Ingresa un correo electrónico válido";
    case "auth/weak-password":
      return "Contraseña débil";
    default:
      return message;
  }
};

export const getGoogleAuthErrorUtility = (error: any) => {
  const { code, message } = error ?? {};
  if (!code) return message;
  switch (code) {
    case statusCodes.SIGN_IN_CANCELLED:
      return "Cancelado";
    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
      return "Servicios no disponibles";
    case statusCodes.IN_PROGRESS:
      return "En progreso";
    case statusCodes.SIGN_IN_REQUIRED:
      return "Iniciar sesión es requerido";
    default:
      return message;
  }
};
