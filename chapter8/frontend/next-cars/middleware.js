import { NextResponse } from "next/server";


export function middleware(req){    
        
    const url = req.url
    const cookie = req.cookies.get('jwt')
 
    if(url.includes('/cars/add') && (cookie===undefined)){      
            return NextResponse.redirect('https://ed-5514448997187584.educative.run:4000/account/login')        
    }
    return NextResponse.next()
}
