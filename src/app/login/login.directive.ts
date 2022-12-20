import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[customDirective]'
}

)
export class customDirective implements OnInit {
    constructor(private button:ElementRef, private renderer: Renderer2){}
    ngOnInit(): void {
        
        // this.renderer.setStyle(this.button.nativeElement,'transform','translateX(100px)')

    }
 
    
}


