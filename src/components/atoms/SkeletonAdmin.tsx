'use client'

import React from 'react'

const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted ${className}`}
      {...props}
    />
  )
}

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="mb-6 rounded-lg border bg-white p-4">
        <div className="flex items-start space-x-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-64" />
            <Skeleton className="h-4 w-96" />
            <div className="flex space-x-2 pt-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <div className="flex space-x-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index + 1}
            className="rounded-lg border bg-white p-4 shadow-sm"
          >
            <Skeleton className="mb-4 h-48 w-full rounded-lg" />

            <div className="mb-3 flex items-center justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="mb-3">
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="mb-3 flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-36" />
            </div>

            <div className="mb-2 flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="mb-3 h-4 w-28" />

            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeleton
