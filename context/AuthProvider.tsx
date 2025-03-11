import { BE_URL } from '@/constants/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { useToast } from 'expo-toast';
import { createContext, MutableRefObject, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext<{
    signIn: (arg0: any) => void;
    signUp: (arg0: any) => void;
    signOut: () => void
    token: string | null;
    isLoading: boolean
}>({
    signIn: () => null,
    signUp: () => null,
    signOut: () => null,
    token: null,
    isLoading: true
});

// Access the context as a hook
export function useAuthSession() {
    return useContext(AuthContext);
}
export function useToken() {
    return useContext(AuthContext).token;
}

export default function AuthProvider({ children }: { children: ReactNode }): ReactNode {
    const tokenRef = useRef<string | null>(null);
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async (): Promise<void> => {
            const token = await AsyncStorage.getItem('@token');
            tokenRef.current = token || '';
            setIsLoading(false);
            if (token) {
                router.replace('/home')
            }
        })()
    }, []);

    const signUp = useCallback(async (data: any) => {
        axios.post(BE_URL + 'auth/signup', {
            body: data
        }).then(() => {
            router.replace('/login')
        }).catch((er) => {
            toast.show("Xəta baş verdi!")
            console.log(er)
        })
    }, []);
    const signIn = useCallback(async (data: any) => {
        try {
            const { data: { token } }: any = await axios.post(BE_URL + 'auth/signin', data)

            await AsyncStorage.setItem('@token', token);
            tokenRef.current = token;
            router.replace('/home')
            toast.show("Uğurlu giriş!")
        } catch (error) {
            toast.show("Error occured")
            console.log(error)
        }
    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.removeItem('@token');
        tokenRef.current = null;
        router.replace('/login');
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                signUp,
                token: tokenRef.current,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
