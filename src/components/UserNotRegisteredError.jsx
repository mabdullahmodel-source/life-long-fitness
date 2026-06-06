import React from 'react'

export default function UserNotRegisteredError() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 text-center">
      <div className="max-w-md rounded-lg bg-red-50 p-6 shadow-md border border-red-200">
        <h2 className="text-xl font-bold text-red-700 mb-2">Access Denied</h2>
        <p className="text-gray-600">Your account is not registered or authorized to view this fitness center portal.</p>
      </div>
    </div>
  )
}
