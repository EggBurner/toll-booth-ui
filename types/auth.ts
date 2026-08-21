export interface SignUpRequest{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface SignUpResponse {
    message: string;
    id: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    approvalStatus: boolean;
    message: string;
    user: LoginResponseUser
}

export interface LoginResponseUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    activeLinksCount: number;
    totalLinksCount: number;
    role: string;
}

export interface ResetPasswordRequest {
    email: string;
    oldPassword: string;
    newPassword: string;
}

export interface ResetPasswordResponse {
    message: string;
}
