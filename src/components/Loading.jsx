import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";


function Loading() {
    return (
        <div>
            <div className="flex w-full h-screen items-center justify-center bg-gray-300">
                <ScaleLoader
                    color='#E75480'
                    loading={loading}
                    cssOverride={null}
                    size={150}
                />
            </div>
        </div>
    )
}

export default Loading
