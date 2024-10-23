import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';
import createMiddleware from 'next-intl/middleware';

const SECRET_KEY = process.env.SECRET_KEY || 'your_super_secret_key';

const locales = ['en', 'ua'];
const defaultLocale = 'ua';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
});

export async function middleware(req: NextRequest) {
    let res = intlMiddleware(req);

    if (!res) {
        res = NextResponse.next();
    }

    const { pathname, locale } = req.nextUrl;

    const isAdminPath = pathname.startsWith(`/${locale}/admin`);
    const isLoginPage = pathname === `/${locale}/admin/login`;

    if (isAdminPath && !isLoginPage) {
        const token = req.cookies.get('authToken')?.value;
        console.log(token);
        if (!token) {
            const loginUrl = req.nextUrl.clone();
            loginUrl.pathname = `/${locale}/admin/login`;
            return NextResponse.redirect(loginUrl);
        }

        try {
            verify(token, SECRET_KEY);
        } catch (err) {
            const loginUrl = req.nextUrl.clone();
            loginUrl.pathname = `/${locale}/admin/login`;
            return NextResponse.redirect(loginUrl);
        }
    }

    return res;
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
