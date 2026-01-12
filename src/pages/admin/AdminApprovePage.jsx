import React from 'react'
import AdminApprove from '../../components/admin/AdminApprove'

function AdminApprovePage() {
  return (
   <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
         <h1 className="text-3xl font-bold mb-6">Request Expert Role</h1>
         <AdminApprove />
       </div>
  )
}

export default AdminApprovePage