'use client';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from '@/components/ui/resizable';

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { WorkspaceSidebar } from './work-space-sidebar';

interface Props{
    children: React.ReactNode;
}


const WorkspaceLayout = ({children}: Props) => {
    return(
        <div className="h-full">
            <Toolbar/>
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                <ResizablePanelGroup
                    orientation="horizontal"
                    autoSave='bc-workspace-layout'
                >
                    <ResizablePanel
                        defaultSize="20%"
                        minSize={11}
                        className='bg-[#5E2C5F]'
                    >
                        <WorkspaceSidebar />
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel minSize={20}>
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default WorkspaceLayout;