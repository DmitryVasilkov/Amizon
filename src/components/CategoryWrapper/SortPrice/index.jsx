import React from 'react'
import { sortPriceAscAction } from '../../../store/reducers/goodsReducer'
import { sortPriceDescAction } from '../../../store/reducers/goodsReducer';
import { useDispatch } from 'react-redux'

export default function SortPrice() {

    const dispatch = useDispatch();

  return (
    <div className="orderBy">
    <p onClick={() => dispatch(sortPriceAscAction())} className="asc">Price ascending</p>
    <p onClick={() => dispatch(sortPriceDescAction())} className="desc">Price descending</p>
    </div>
  )
}
