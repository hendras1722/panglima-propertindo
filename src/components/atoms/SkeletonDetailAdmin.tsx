import React from 'react'

const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted ${className}`}
      {...props}
    />
  )
}

const FeedbackDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6 flex items-center space-x-2">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-5 w-12" />
      </div>

      <div className="mb-6 flex items-center space-x-3">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-6 w-32" />
      </div>

      <div className="mb-6 flex items-center space-x-3">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="h-64 w-full rounded-lg" />

          <div className="flex space-x-2">
            <Skeleton className="h-16 w-16 rounded-lg" />
            <Skeleton className="h-16 w-16 rounded-lg" />
            <Skeleton className="h-16 w-16 rounded-lg" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-5 w-32" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-5 w-24" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-5 w-36" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-5 w-28" />
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg border bg-white p-6">
        <div className="mb-4 flex items-center space-x-2">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-32" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Skeleton className="h-5 w-8" />
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index + 'star'} className="h-5 w-5" />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Skeleton className="h-5 w-20" />
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index + 'csr'} className="h-5 w-5" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackDetailSkeleton
