import { use } from "react";

interface  Props{
    params: Promise<{workspaceId:string}>
}

const WorkspaceIdPage = ({params}: Props) => {
    const {workspaceId} = use(params);


    return (
        <div>
            ID: {workspaceId}
        </div>
    )   
}

export default WorkspaceIdPage;