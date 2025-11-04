import { useState } from "react"
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {DatePicker} from "@/components/date-picker"

function App() {
  const [name, setName] = useState("")
  const [fortune, setFortune] = useState<string | null>(null)
  const [birthdayDate, setBirthdayDate] = useState<Date | undefined>(undefined)

  const fortunes = [
    "大吉 🎉 今日は最高の一日になりそう！",
    "中吉 😊 穏やかで良い一日になりそう。",
    "小吉 🌷 小さな幸せが訪れるかも。",
    "凶 😢 無理せず休むのが吉。",
  ]

  const handleFortune = () => {
    if (!name && !birthdayDate) {
      setFortune("名前と誕生日を入力してください")
      return
    }
    else if (!name) {
      setFortune("名前を入力してください")
      return
    }
    else if (!birthdayDate) {
      setFortune("誕生日を入力してください")
      return
    }
    const random = Math.floor(Math.random() * fortunes.length)
    setFortune(`${name}さんの今日の運勢は… ${fortunes[random]}`)
  }

  return (
    <>
      <div className="min-h-screen w-screen flex items-center justify-center p-6">
        <Card className="w-full max-w-md min-h-[300px] shadow-xl">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center text-gray-700">What's your fortune today?</h2>
          </CardHeader>
          <CardContent className="space-y-4 mt-auto">
            <Input
              placeholder="名前を入力"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <DatePicker
              value={birthdayDate}
              onChange={(d) => setBirthdayDate(d)}
            />
            {fortune && (
              <p className="mt-4 text-center text-lg font-medium text-gray-800 bg-white/60 p-4 rounded-lg">
                {fortune}
              </p>
            )}
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full text-black" onClick={handleFortune}>
              OK
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default App;