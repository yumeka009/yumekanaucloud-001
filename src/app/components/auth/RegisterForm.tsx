'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import facebook from '../../../assets/Facebook.png';
import google from '../../../assets/Google.png';
import apple from '../../../assets/Apple.png';

import userApi from '../../../apis/userApi';

const RegisterForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const requestData = { email, password };
        userApi.registerUser(requestData)
            .then(() => {
                router.push('/register-steps');
            })
            .catch((err) => {
                alert(err.message || 'Registration failed.');
            });
    };

    return (
        <div className="flex flex-col items-center py-8">
            <h1
                className="text-[56px] font-bold leading-[60px] tracking-[-0.0075em] mb-8"
                style={{
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    width: '573px',
                    height: '60px',
                    textAlign: 'center'
                }}
            >
                ゆめかなうクラウド
            </h1>

            <h2 className="text-[48px] font-bold leading-[62px] text-[#333333] mb-8">
                会員登録
            </h2>

            <p className="text-[20px] leading-[24px] text-[#333333] mb-12">
                必要情報を入力して会員登録をしてください
            </p>

            <div className="w-[386px] mx-auto">
                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="mb-4">
                        <label className="block text-[18px] leading-[22px] font-normal text-[#333333] mb-1">
                            ログインID（メールアドレス）
                        </label>
                        <Input
                            type="email"
                            placeholder="例）taro@yumekanaucloud.com"
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            className="w-full h-[48px] bg-[#FFFBF6] border-[0.5px] border-[#FFD1A0] rounded-[8px] text-[18px] leading-[22px] text-[#333333] placeholder:text-[#FFC17E]"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[18px] leading-[22px] font-normal text-[#333333] mb-1">
                            パスワード
                        </label>
                        <Input
                            type="password"
                            placeholder="パスワードを入力してください"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            className="w-full h-[48px] bg-[#FFFBF6] border-[0.5px] border-[#FFD1A0] rounded-[8px] text-[18px] leading-[22px] text-[#333333] placeholder:text-[#FFC17E]"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-[18px] leading-[22px] font-normal text-[#333333] mb-1">
                            パスワード（確認）
                        </label>
                        <Input
                            type="password"
                            placeholder="パスワードを再入力してください"
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                            className="w-full h-[48px] bg-[#FFFBF6] border-[0.5px] border-[#FFD1A0] rounded-[8px] text-[18px] leading-[22px] text-[#333333] placeholder:text-[#FFC17E]"
                        />
                        <div className="mt-2 text-[13px] leading-[21px] text-[#E72E76]">
                            <span className='text-[black]'>
                                ※文字数は10文字以上
                            </span>
                            <br />
                            <span>
                                ※使用可能な文字は半角英大文字 (A-Z)、半角英小文字 (a-z)、<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;半角数字 (0-9)、半角記号 (例: !@#$%^&*() など)
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Button
                            type="submit"
                            className="w-[320px] h-[48px] text-white font-bold text-[20px] leading-[24px] hover:opacity-90 filter drop-shadow-[0_2px_4px_rgba(229,231,235,0.5)]"
                            style={{
                                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
                                borderRadius: '32px'
                            }}
                        >
                            登録する
                        </Button>
                    </div>
                </form>

                <div className="w-full border-t border-[#505050] mb-8" />

                <div className="flex flex-col items-center gap-4">
                    {/* Facebook Button */}
                    <Button
                        variant="outline"
                        className="w-[320px] h-[48px] bg-white hover:bg-gray-100 hover:text-white transition-colors filter drop-shadow-[0_2px_4px_rgba(229,231,235,0.5)]"
                        style={{
                            borderRadius: '32px',
                            border: '1px solid #E5E7EB',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div className="absolute left-[32px]">
                            <Image
                                src={facebook}
                                alt="Facebook"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <span className="font-['Noto_Sans_JP'] text-[20px] leading-[24px] font-medium text-[#333333]">
                            Facebook
                        </span>
                    </Button>

                    {/* Google Button */}
                    <Button
                        variant="outline"
                        className="w-[320px] h-[48px] bg-white hover:bg-gray-100 hover:text-white transition-colors filter drop-shadow-[0_2px_4px_rgba(229,231,235,0.5)]"
                        style={{
                            borderRadius: '32px',
                            border: '1px solid #E5E7EB',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div className="absolute left-[32px]">
                            <Image
                                src={google}
                                alt="Google"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <span className="font-['Noto_Sans_JP'] text-[20px] leading-[24px] font-medium text-[#333333]">
                            Google
                        </span>
                    </Button>

                    {/* Apple Button */}
                    <Button
                        variant="outline"
                        className="w-[320px] h-[48px] bg-white hover:bg-gray-100 hover:text-white transition-colors filter drop-shadow-[0_2px_4px_rgba(229,231,235,0.5)]"
                        style={{
                            borderRadius: '32px',
                            border: '1px solid #E5E7EB',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div className="absolute left-[32px]">
                            <Image
                                src={apple}
                                alt="Apple"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <span className="font-['Noto_Sans_JP'] text-[20px] leading-[24px] font-medium text-[#333333]">
                            Apple
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
