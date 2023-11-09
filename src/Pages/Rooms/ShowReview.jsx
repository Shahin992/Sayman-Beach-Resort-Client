

const ShowReview = ({reviews}) => {

    

    return (
        <div>
            console.log(reviews);
              <div>
    <h3 className="text-3xl md:text-5xl font-bold text-blue-950  my-8">Reviews: {reviews.length}</h3>
   {/* { total_review ?
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
 <div className="card-body bg-slate-100 shadow-md items-center ">
 
 <div className="flex gap-5">
     <figure><img className="w-16 h-16 rounded-full" src="https://static.tcimg.net/authors/c1722665982a5bd0/matt-digiulio.jpg" alt="" /></figure>
     <div className="">
     <div className="flex gap-3 items-center">
     <h2 className="card-title mb-3 text-2xl font-medium">John Doe</h2>
 <p><small>Post Date: 11-05-22</small></p>
     </div>
     <h3 className="text-xl">Spacious room, clean, and well-maintained.</h3> 
   
     </div>
     
 </div>
</div>
 </div> : <h3 className="text-3xl md:text-5xl font-bold text-blue-950 text-center"> No One Review Yet</h3>
   } */}

    </div> 
            
        </div>
    );
};

export default ShowReview;