export function getEmailSigUp(email) {
  
  return {
    type: '@user/GET_EMAIL_SUCCESS',
    payload: { email},
    
  };
   
}

export function signInRequest(email, password) {
    return {
      type: '@auth/SIGN_IN_REQUEST',
      payload: { email, password },
    };
  }
  
  export function signInSuccess(token, user) {
    return {
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { token, user },
    };
  }
  
  export function signUpRequest(name, email, nascimento, cpf, cep, endereco, numero, password ) {
    return {
      type: '@auth/SIGN_UP_REQUEST',
      payload: { name, email, nascimento, cpf, cep, endereco, numero, password },
    };
  }
  
  export function signFailure() {
    return {
      type: '@auth/SIGN_IN_FAILURE',
    };
  }
  
  export function signOut() {
    return {
      type: '@auth/SIGN_OUT',
    };
  }