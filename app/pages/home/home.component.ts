import {Component} from "@angular/core";
import { Page } from "ui/page";
import {SessionService} from "../../shared/sessions/sessions.service";
import {Session} from "../../shared/sessions/session";
import {Router} from "@angular/router";
import {OnInit} from "@angular/core";

@Component({
    styleUrls: ["pages/home/home.css"],
    templateUrl: 'pages/home/home.html'
})
export class HomeComponent implements OnInit {
  sessions: Array<Session>;

  constructor(private sessionService: SessionService, private router: Router) {
    this.sessions = this.sessionService.getSessions();  
  }
  
  ngOnInit() {
    
  }    

  onSessionTap(eventData) {
      console.log("session selected with id: "+eventData.view.bindingContext.id);
      this.router.navigate(["sessionOverview", eventData.view.bindingContext.id]);
  }

  onShowMainOptions() {
      
  }
}