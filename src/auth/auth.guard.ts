                                                                                        import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';  
   
@Injectable()            m  
export class JwtAuthGuard extends AuthGuard('jwt') {                            
  getRequest(context: ExecutionContext) {                        n       m         
    const ctx = GqlExecutionContext.create(context);                  
    const { req } = ctx.getContext();                  
     const token = req.headers.authorization?.replace ('Bearer ',  '' ); 
    req.token = token;  
    return req                     
  }//hell0                 
}            
             
       
   
  
 
 
 
