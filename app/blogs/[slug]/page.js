export default function blog( {params} ){
    return(
        <h1 className="text-6xl">this is { params.slug}</h1>
    );
}