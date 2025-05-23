import Circlchart from "@/components/chartscomp/Circlchart"
import Halfyear from "@/components/chartscomp/Halfyear"
import Lastweek from "@/components/chartscomp/Lastweek"

const Statistics = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Halfyear />
          <Lastweek />
          <Circlchart />
          {/* <div className="aspect-video rounded-xl bg-muted/50" />  */}
      </div>

    </div>
  )
}

export default Statistics