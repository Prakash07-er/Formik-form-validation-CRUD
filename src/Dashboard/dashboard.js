import Card from './card';



export default  function Dashbaoard(){

  
    return(<>
    
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a  class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" href="index.html" ><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                <div class="row">
                    {
                        carddata.map((obj) => {
                            return(
                                    <Card data={obj}></Card>
                                )
                        })
                        
                    }
                    
                </div>
                
             
              

    </>
    )
}