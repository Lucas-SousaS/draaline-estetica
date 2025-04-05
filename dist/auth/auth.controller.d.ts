import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dto: SignUpDto): Promise<{
        access_token: string;
    }>;
    signIn(dto: SignInDto): Promise<{
        access_token: string;
    }>;
}
