import Areachart from './areachart';
import Piechart from './piechart';
import Projectcard from './projectcard';
import Color from './color';
import Illustration from './ilustration';
import Approach from './approach'



export default  function Card (props){
    return (<>
                <div class="row">

            <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                               Monthly Salery</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000"</div>
                        </div>
                        <div class="col ml-5"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                        <div class="col-auto">
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                               Yearly <br/> Revenue</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$180,000"</div>
                        </div>
                        <div class="col ml-4"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                        <div class="col-auto">
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                               Turn Over</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000"</div>
                        </div>
                        <div class="col ml-5"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                        <div class="col-auto">
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                               Intrest</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000"</div>
                        </div>
                        <div class="col ml-5"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                        <div class="col-auto">
                      </div>
                    </div>
                </div>
            </div>
        </div>
</div>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <Projectcard></Projectcard>
                        <div class="row">
                            <Color></Color>
                         </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <Illustration></Illustration>
                        <Approach></Approach>
                    </div>
                </div>
                <div class="row">
                    <Areachart></Areachart>
                    <Piechart></Piechart>
                </div>
                
    </>
    )
}