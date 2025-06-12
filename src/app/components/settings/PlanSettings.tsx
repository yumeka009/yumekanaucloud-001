// components/PrivacySettings.tsx
import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const plans = [
  {
    title: "ベーシック",
    description: "ちょっと使いたいユーザー向け",
    price: "¥3,980/月",
    features: ["応募数：無制限", "やりとり可能な相手数/月：3人まで"],
    highlight: false,
  },
  {
    title: "ミドル",
    description: "もっとやりとりしたいユーザー向け",
    price: "¥8,980/月",
    features: ["応募数：無制限", "やりとり可能な相手数/月：8人まで"],
    highlight: "おすすめ",
  },
  {
    title: "スタンダード",
    description: "気兼ねなくやりとりしたいユーザー向け",
    price: "¥14,980/月",
    features: ["応募数：無制限", "やりとり可能な相手数/月：15人まで"],
    highlight: "一番人気",
  },
  {
    title: "アドバンス",
    description: "積極的にやりとりしたいユーザー向け",
    price: "¥16,980/月",
    features: ["応募数：無制限", "やりとり可能な相手数/月：20人まで"],
    highlight: false,
  },
  {
    title: "プレミアム",
    description: "開封精神をみせるユーザー向け",
    price: "¥23,980/月",
    features: ["応募数：無制限", "やりとり可能な相手数/月：30人まで"],
    highlight: false,
  },
]

const PrivacySettings = () => {
  const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly">("annual")

  return (
    <div className="w-full max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-8 rounded-sm bg-gradient-to-b from-[#FF8400] via-[#E72E76] to-[#DA01B2]" />
        <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-[40px]">
          プライバシーの変更
        </h1>
      </div>

      {/* Current Plan Info */}
      <div className="w-full rounded-lg border border-gray-200 p-6 space-y-4">
        <div className="text-center space-y-1">
          <p className="text-sm text-gray-700">現在ご契約中のプラン</p>
          <p className="text-xl font-bold text-[#E72E76]">無料会員：〇月〇日まで</p>
        </div>
        <div className="border-t border-[#E72E76]" />
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-gray-800">
            <Check className="text-[#E72E76] w-5 h-5 mt-[2px]" />
            スカウト数：無制限
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-800">
            <Check className="text-[#E72E76] w-5 h-5 mt-[2px]" />
            やりとり可能な相手数/月：3人まで
          </li>
        </ul>
      </div>

      {/* Free & Trial Plans */}
      <div className="space-y-6 py-6 max-w-6xl">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#DA01B2]">利用料金プランのご案内</h2>
          <p className="text-lg font-medium text-gray-800">無料会員プラン</p>
          <div className="border-t border-pink-300 w-1/3 mx-auto mt-2" />
          <p className="text-[#E72E76] text-base mt-2 font-semibold">初期開設費、登録手数料0円</p>
          <p className="text-sm text-gray-700">
            今なら <span className="text-[#DA01B2] font-medium">お試し無料プラン</span> もご用意しました
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-2xl mx-auto">
          {/* Trial Plan */}
          <Card className="p-6 space-y-4 text-center">
            <CardHeader>
              <CardTitle className="text-[#E72E76] text-lg font-bold">新規登録（10日限定）</CardTitle>
              <CardDescription>まずはお試しのユーザーの方向け</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">¥0</p>
              <div className="border-t border-[#E72E76] my-2" />
              <ul className="text-sm text-gray-700 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <Check className="text-[#E72E76] w-5 h-5 mt-0.5" />
                  スカウト数：無制限
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#E72E76] w-5 h-5 mt-0.5" />
                  やりとり可能な相手数/月：3人まで
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Free Plan */}
          <Card className="p-6 space-y-4 text-center">
            <CardHeader>
              <CardTitle className="text-[#E72E76] text-lg font-bold">フリー</CardTitle>
              <CardDescription>まずはお試しのユーザーの方向け</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">¥0</p>
              <div className="border-t border-[#E72E76] my-2" />
              <ul className="text-sm text-gray-700 space-y-2 text-left">
                {[
                  "ログイン：可能",
                  "ダッシュボード管理：可能",
                  "初期開設費、登録手数料：無料",
                  "ダイレクトスカウト：無効",
                  "やりとり可能な相手数/月：なし",
                  "メッセージ機能：使用不可",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="text-[#E72E76] w-5 h-5 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#DA01B2] via-[#E72E76] to-[#FF8400] text-white hover:opacity-90">
                プラン変更する
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Paid Plans */}
      <div className="py-6 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-4">
          今なら<span className="text-pink-500">お得な有料プラン</span>もご用意しました
        </h2>

        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md p-1 bg-[#FFD4E5]">
            {["annual", "monthly"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedPlan(type as "annual" | "monthly")}
                className={`flex items-center justify-center px-4 py-2 rounded-md ${
                  selectedPlan === type ? "bg-[#E72E76] text-white" : "bg-[#FFD4E5] text-[#333333]"
                }`}
              >
                <span className="text-sm font-normal leading-[21px] tracking-[-0.0075em]">
                  {type === "annual" ? "年間契約（%オフ）" : "月契約"}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={`relative border-2 ${
                plan.highlight === "おすすめ"
                  ? "border-green-500"
                  : plan.highlight === "一番人気"
                  ? "border-yellow-500"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div
                  className={`absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white rounded-bl ${
                    plan.highlight === "おすすめ" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                >
                  {plan.highlight}
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pink-500 mb-1">{plan.title}</h3>
                <p className="mb-2 text-sm text-gray-600">{plan.description}</p>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-4 space-y-1 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
                <Button className="w-full">プラン変更する</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          ※プレミアム以上のプランはご相談ください
        </p>
      </div>
    </div>
  )
}

export default PrivacySettings
