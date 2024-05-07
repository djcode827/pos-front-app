import DefaultCard from "./cards/DefaultCard";



function Home() {




    return (

        <>
        <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                       <DefaultCard />
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                       <DefaultCard />
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                       <DefaultCard />
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                       <DefaultCard />
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Home;