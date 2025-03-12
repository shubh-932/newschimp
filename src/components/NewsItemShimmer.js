import React from 'react'

export default function NewsItemShimmer() {
    return (
        <div className="card my-2">
            <div style={{width: '355px', height: '200px', backgroundColor: 'gray'}}></div>
            <div className="card-body">
                <p style={{width: '323px', height: '24px', backgroundColor: 'gray'}}></p>
                <p style={{width: '323px', height: '72px', backgroundColor: 'gray'}}></p>
                <p style={{width: '323px', height: '16px', backgroundColor: 'gray'}}></p>
                <p style={{width: '85px', height: '30px', backgroundColor: 'gray'}}></p>
            </div>
        </div>
    )
}
