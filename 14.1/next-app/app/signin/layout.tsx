export default function ({children}:{children: React.ReactNode}){
    return(
        <div>
        <div className="border-b text-center p-1" >
            Sign in now and get 20% off...
        </div>
        {children}
        </div>
    );
}