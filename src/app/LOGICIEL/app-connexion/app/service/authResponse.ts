export interface AuthResponse {
    userId: number;
    jwt: string;
    refreshToken: string;
    expiresAt: number;
    username: string;
    role: string;
    message: string;
}
