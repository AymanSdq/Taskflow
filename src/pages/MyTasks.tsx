import { useGetAllTasks } from "@/services/query";


const MyTasks = () => {

    const { data: allTasks, isError: allTasksError, isSuccess: allTasksSuccess, isLoading: allTasksLoading} = useGetAllTasks();

    console.log(allTasks)
    


    return (
    <div className="flex flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        
        </div>
    </div>
    );
};

export default MyTasks;
