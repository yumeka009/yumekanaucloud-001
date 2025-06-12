// components/PrivacySettings.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const clients = ["ユーザーA", "ユーザーB", "ユーザーC"] // Example data

const PrivacySettings = () => {
  return (
    <div className="w-full max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 rounded-sm bg-gradient-to-b from-[#FF8400] via-[#E72E76] to-[#DA01B2]" />
        <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-[40px]">
          プライバシーの変更
        </h1>
      </div>

      {/* Description */}
      <p className="text-sm text-black mb-6">
        ブロックしたい相手を設定できます。<br />
        あなたの情報が表示されず、かつ、メッセージ連絡がとれなくなります。
      </p>

      {/* Blocked Clients List */}
      <Card className="w-full rounded-lg max-w-4xl shadow-sm border border-gray-200">
        <CardContent className="flex flex-col p-0">
          {clients.map((client, index) => (
            <div key={index}>
              <div className="flex items-center max-w-4xl justify-between px-4 py-4">
                <h3 className="text-base font-semibold text-[#333]">{client}</h3>
                <Button
                  variant="outline"
                  className="text-[#E72E76] border-[#E72E76] hover:bg-[#e72e7610]"
                >
                  ブロックを外す
                </Button>
              </div>
              {index !== clients.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default PrivacySettings
