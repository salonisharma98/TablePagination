const Pagination=({postsPerPage,totalPosts,paginate})=>{
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i);
  }
  return(
    <div>
      <ul>
        {pageNumbers.map(number=>{
          <li key={number}>
            <a onClick={()=>paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        })}
      </ul>
    </div>
  )
}
export default Pagination;