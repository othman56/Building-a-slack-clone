 "use client"

import { useWorkspaceId } from "@/hooks/use-workspace-id";

const workspaceIdPage = () => {

  const workspaceId = useWorkspaceId()
    
  return (
    <div>
      ID:{workspaceId }
    </div>
  )
}

export default workspaceIdPage