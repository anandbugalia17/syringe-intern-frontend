import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function App() {
  const [jobId, setJobId] = useState(null)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [jobData, setJobData] = useState(null)

  // Start a new job
  const startJob = async () => {
    setLoading(true)
    setStatus(null)
    setJobId(null)
    setJobData(null)

    try {
      const res = await fetch(`${BACKEND_URL}/api/jobs/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()

      if (data.success) {
        setJobId(data.jobId)
        setStatus('Pending')
        pollStatus(data.jobId)
      }
    } catch (error) {
      setStatus('Error')
      setLoading(false)
    }
  }

  // Poll every 2 seconds until Completed or Failed
  const pollStatus = (id) => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/jobs/${id}`)
        const data = await res.json()

        if (data.success) {
          setStatus(data.status)
          setJobData(data)

          // Stop polling when job is done
          if (data.status === 'Completed' || data.status === 'Failed') {
            clearInterval(interval)
            setLoading(false)
          }
        }
      } catch (error) {
        clearInterval(interval)
        setStatus('Error')
        setLoading(false)
      }
    }, 2000)
  }

  // Color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':     return 'text-yellow-400'
      case 'Processing':  return 'text-blue-400'
      case 'Completed':   return 'text-green-400'
      case 'Failed':      return 'text-red-400'
      case 'Error':       return 'text-red-400'
      default:            return 'text-gray-400'
    }
  }

  // Emoji based on status
  const getStatusEmoji = (status) => {
    switch (status) {
      case 'Pending':     return '⏳'
      case 'Processing':  return '⚙️'
      case 'Completed':   return '✅'
      case 'Failed':      return '❌'
      case 'Error':       return '❌'
      default:            return ''
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-lg shadow-xl border border-gray-700">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-white mb-2">
          Syringe <span className="text-green-400">Task Processor</span>
        </h1>
        <p className="text-gray-400 mb-8 text-sm">
          Async background job processing with QStash + MongoDB
        </p>

        {/* Start Button */}
        <button
          onClick={startJob}
          disabled={loading}
          className="w-full py-3 px-6 bg-green-500 hover:bg-green-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 mb-6"
        >
          {loading ? 'Processing...' : 'Start Task'}
        </button>

        {/* Job Info */}
        {jobId && (
          <div className="space-y-4">
            
            {/* Job ID */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-400 text-xs mb-1">Job ID</p>
              <p className="text-white font-mono text-sm break-all">{jobId}</p>
            </div>

            {/* Status */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-400 text-xs mb-1">Status</p>
              <p className={`text-xl font-bold ${getStatusColor(status)}`}>
                {getStatusEmoji(status)} {status}
              </p>
            </div>

            {/* Timestamps */}
            {jobData && (
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 space-y-2">
                <p className="text-gray-400 text-xs mb-2">Timestamps</p>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Started:</span>
                  <span className="text-gray-300 text-sm">
                    {new Date(jobData.createdAt).toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Updated:</span>
                  <span className="text-gray-300 text-sm">
                    {new Date(jobData.updatedAt).toLocaleTimeString()}
                  </span>
                </div>
                {jobData.completedAt && (
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Completed:</span>
                    <span className="text-green-400 text-sm">
                      {new Date(jobData.completedAt).toLocaleTimeString()}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Polling indicator */}
            {loading && (
              <p className="text-center text-gray-500 text-xs animate-pulse">
                Polling for updates every 2 seconds...
              </p>
            )}

          </div>
        )}
      </div>
    </div>
  )
}

export default App