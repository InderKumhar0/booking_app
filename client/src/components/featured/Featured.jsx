import React from 'react';
import "./Featured.css";
import useFetch from '../../hooks/useFetch';

const Featured = () => {


  const { data, loading, error } = useFetch("/hotels/countByCity?cities=udaipur,madrid,berlin");


  return (
    <div>
      <div className="featured">
        {loading ? "Loading please wait" : <><div className="featuredItem">
            <img src="https://t4.ftcdn.net/jpg/00/85/61/27/360_F_85612737_veoCTufAsIuYJC8rjs06CA4HrLw30r8l.jpg" alt="" className="featuredImg" />
            <div className='featuredTitles'>
                <h1>Udaipur</h1>
                <h1>{data[0]}</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/id/514769480/photo/madrid-spain-on-gran-via.jpg?s=612x612&w=0&k=20&c=5PDxqwnxYmudMHIs3ZkRJRE64153nnw-hJTH2zdryzc=" alt="" className="featuredImg" />
            <div className='featuredTitles'>
                <h1>Madrid</h1>
                <h1>{data[1]}</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/FotoJet93487jhfds.jpg" alt="" className="featuredImg" />
            <div className='featuredTitles'>
                <h1>Berlin</h1>
                <h1>{data[2]}</h1>
            </div>
        </div></>}
      </div>
    </div>
  )
}


export default Featured; 