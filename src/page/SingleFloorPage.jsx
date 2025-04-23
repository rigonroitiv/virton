import React from 'react'
import { useParams } from 'react-router-dom'
import FloorSvg from '../components/floorSvg/FloorSvg';

const SingleFloorPage = () => {
    const { id } = useParams();
    return (
        <div>
            <FloorSvg floorId={id} />
        </div>
    )
}

export default SingleFloorPage