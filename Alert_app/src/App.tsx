import Alert from './components/Alert/Alert'
import { CircleX , BellRing , TriangleAlert , NotebookPen  ,CheckCheck   } from 'lucide-react';
function App() {

  return (
    <>
      <Alert type={"Alert-Danger"} icon={<CircleX/>} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio cum mollitia itaque, reprehenderit sequi. Repellat in, quasi tempore, officia dignissimos, quam pariatur ea libero necessitatibus minus error id aspernatur."}/>
      <Alert type={"Alert-info"} icon={<BellRing/>} title={"Upgrade Your plan"} description={"To Upgrade your plan adipisicing elit. Dolor distinctio cum mollitia itaque, reprehenderit sequi. Repellat in, quasi tempore, officia dignissimos, quam pariatur ea libero necessitatibus minus error id aspernatur."}/>
      <Alert type={"Alert-warning"} icon={<TriangleAlert/>} title={"Tips & Tricks"} description={"Learn more Tips consectetur adipisicing elit. Dolor distinctio cum mollitia itaque, reprehenderit sequi. Repellat in, quasi tempore, officia dignissimos, quam pariatur ea libero necessitatibus minus error id aspernatur."}/>
      <Alert type={"Alert-note"} icon={<NotebookPen/>} title={"Note"} description={"Note ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio cum mollitia itaque, reprehenderit sequi. Repellat in, quasi tempore, officia dignissimos, quam pariatur ea libero necessitatibus minus error id aspernatur."}/>
      <Alert type={"Alert-success"} icon={<CheckCheck />} title={"Your Code has been processed"} description={"Successfully ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio cum mollitia itaque, reprehenderit sequi. Repellat in, quasi tempore, officia dignissimos, quam pariatur ea libero necessitatibus minus error id aspernatur."}/>
    </>
  )
}

export default App
