import { useChatStore } from "../store/useChatStore"
import ChatContiner from "../components/ChatContiner"
import { NoChartSelected } from "../components/NoChartSelected"
import Sidebar from "../components/Sidebar"

const HomePage = () => {

  const{selectedUser} = useChatStore()
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-2xl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar/>

            {!selectedUser ? <NoChartSelected/> : <ChatContiner/>}
          </div>
        </div>
      </div>


    </div>
  )
}

export default HomePage
