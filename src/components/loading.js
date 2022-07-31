const Loading = () => {
    return ( 
        <>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-label="Info striped example" style={{width:300}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">loading...
                </div>
            </div>
        </>
     );
}
 
export default Loading;