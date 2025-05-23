import { useGetAllTasks } from "@/services/query";
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useDeleteTask } from "@/services/mutations";




const MyTasks = () => {
    // Get all tasks
    const { data: allTasks, isError: allTasksError, isSuccess: allTasksSuccess, isLoading: allTasksLoading} = useGetAllTasks();
    // Delete a task
    const {mutate : deleteTask} = useDeleteTask();
    


    return (
    <div className="flex flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="col-span-3">
                <div className="overflow-x-auto bg-white dark:bg-[#0A0A0A]">
                <div className="relative m-[2px] mb-3 mr-5 float-left">
                    <label htmlFor="inputSearch" className="sr-only">Search </label>
                    <input id="inputSearch" type="text" placeholder="Search..." className="block w-64 rounded-lg border dark:border-none  py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500 dark:text-neutral-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </span>
                </div>
                {/* Filtering */}
                <div className="relative m-[2px] mb-3 float-right hidden sm:block">
                    <label htmlFor="inputFilter" className="sr-only">Filter</label>
                    <select id="inputFilter" className="block w-40 rounded-lg border dark:border-none dark:bg-neutral-600 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
                    <option value="1" selected>Last week</option>
                    <option value="2">Last month</option>
                    <option value="3">Yesterday</option>
                    <option value="4">Last 7 days</option>
                    <option value="5">Last 30 days</option>
                    </select>
                </div>

                <table className="min-w-full text-left text-sm whitespace-nowrap">
                    <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
                    <tr>
                        <th scope="col" className="px-6 py-6">
                        Title
                        </th>
                        <th scope="col" className="px-6 py-6">
                        Description
                        </th>
                        <th scope="col" className="px-6 py-6">
                        Status
                        </th>
                        <th scope="col" className="px-6 py-6">
                        Priority
                        </th>
                        <th scope="col" className="px-6 py-6">
                        Action
                        </th>
                    </tr>
                    </thead>

                    <tbody>

                    {allTasksSuccess && allTasks.data.map( (oneTask : any) => (

                        <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                        <th scope="row" className="px-6 py-6">
                            {oneTask.title}
                        </th>
                        <td className="px-6 py-6">{oneTask.description?.split(' ').slice(0, 3).join(' ') + '...'}</td>
                        <td className="px-6 py-6">{oneTask.status }</td>
                        <td className="px-6 py-6">{oneTask.priority}</td>
                        <td className="px-6 py-6 gap-2 flex">
                            <input type="hidden" name="idTask" value={oneTask.taskid} />
                            <Button className="bg-green-500 text-white">Edit</Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button className="cursor-pointer" variant="destructive">Delete</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        Task and remove the task data from our servers.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </td>
                        </tr>

                    ) )}

                    </tbody>

                </table>

                <nav className="mt-5 flex items-center justify-between text-sm" aria-label="Page navigation example">
                    <p>
                    Showing <strong>1-5</strong> of <strong>10</strong>
                    </p>

                    <ul className="list-style-none flex">
                    <li>
                        <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#!"
                        >
                        Previous
                        </a>
                    </li>
                    <li>
                        <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#!"
                        >
                        1
                        </a>
                    </li>
                    <li aria-current="page">
                        <a
                        className="relative block rounded bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300"
                        href="#!"
                        >
                        2
                        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                            (current)
                        </span>
                        </a>
                    </li>
                    <li>
                        <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#!"
                        >
                        3
                        </a>
                    </li>
                    <li>
                        <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#!"
                        >
                        Next
                        </a>
                    </li>
                    </ul>
                </nav>

                </div>
            </div>
        </div>
    </div>
    );
};

export default MyTasks;


