import { Component, OnInit } from '@angular/core';
import { CollapsibleModule } from 'angular2-collapsible';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ColorPickerModule } from 'ngx-color-picker';
import * as $ from 'jquery';
import { fadeInAnimation } from '../animations/fadein';
import { FontPickerConfigInterface } from 'ngx-font-picker';
import {GroupService} from '../services/group.service' ;
import {DataService} from '../services/data.service' ;
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-ui-configurator',
  templateUrl: './ui-configurator.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./ui-configurator.component.css']
})
export class UiConfiguratorComponent implements OnInit {
  public color: string = "#000000";
  public bodytext: string = "#000000";
  public background: string = "#ffffff";
  public footercolor:string = "#ebebeb"
  public headercolor:string = "#07639d"
  public fontfamilys:any;
  public fontfamilyshead:any;
  defaultfont:string;
  headerfont:string;
  selectCtrlNo: any;
  selectCompanyName: any;
  options:Boolean;
  options1:Boolean;
  public myStyles: any;
  savesettings: any;
  constructor(private dataservice:DataService,private localStorageService:LocalStorageService) {
  }
  ngOnInit() {
    
    $('#desktopNavigation').removeClass('hideelement');
    this.selectCtrlNo =  this.dataservice.selectCtrlNo ;
    this.selectCompanyName =  this.dataservice.selectCompanyName ;

    this.defaultfont = "Arial";
    this.fontfamilys = [];
    this.fontfamilys.push({'title':'Arial','value':'Arial'});
    this.fontfamilys.push({'title':'Georgia','value':'Georgia, serif'});
    this.fontfamilys.push({'title':'Times New Roman','value':'Times New Roman'});
    this.fontfamilys.push({'title':'Palatino Linotype','value':'Palatino Linotype'});
    
    this.headerfont = "sans-serif";
    this.fontfamilyshead = [];
    this.fontfamilyshead.push({'title':'Arial','value':'Arial'});
    this.fontfamilyshead.push({'title':'Georgia','value':'Georgia, serif'});
    this.fontfamilyshead.push({'title':'Times New Roman','value':'Times New Roman'});
    this.fontfamilyshead.push({'title':'Palatino Linotype','value':'Palatino Linotype'});
    this.fontfamilyshead.push({'title':'sans-serif','value':'sans-serif'});
    this.fontfamilyshead.push({'title':'Verdana','value':'Verdana, sans-serif'});
    this.fontfamilyshead.push({'title':'Helvetica','value':'Helvetica, sans-serif'});
    this.fontfamilyshead.push({'title':'Courier','value':'Courier, monospace'});

  }
  onChange(fon,callfrom){
    if(callfrom == 'first'){
      this.defaultfont = fon;
    }
    if(callfrom == 'second'){
      this.headerfont = fon;
    }
  }
  saveSettings() {
    let savesettings={};
    let fontColor={};
    let fontFamily={};
    let backgroundColor={};
    let headerFooterColor={};
    let headerFooterDisplay={}
    
    fontColor['color']=this.color,
    fontColor['bodytext']=this.bodytext,
    backgroundColor['background']=this.background,
    headerFooterColor['footercolor']=this.footercolor,
    headerFooterColor['headercolor']=this.headercolor,
    fontFamily['defaultfont'] = this.defaultfont,
    fontFamily['headerfont'] = this.headerfont,
    headerFooterDisplay['options'] = this.options,
    headerFooterDisplay['options1'] = this.options1,
    savesettings['controNumber']=this.selectCtrlNo,
    savesettings['tpaId']=this.localStorageService.get('tpaid')

    var uiConfig = {};
    uiConfig["fontColor"] = {'header':this.color, 'default':this.bodytext};
    uiConfig["fontFamily"] = {'header':this.headerfont, 'default':this.defaultfont};
    uiConfig["backgroundColor"] = {'background':this.background};
    uiConfig["headerFooterDisplay"] = {'header':this.options, 'default':this.options1};
    
    var selfserviceUIDesign = {};
    selfserviceUIDesign['tpaId']=this.localStorageService.get('tpaid'),
    selfserviceUIDesign['controNumber']=this.selectCtrlNo,
    selfserviceUIDesign['uiConfig'] = {'uiConfig' : uiConfig};
    
    var cssRequest ={};
    cssRequest['selfserviceUIDesign'] = {'selfserviceUIDesign' : selfserviceUIDesign}  
    
    console.log(JSON.stringify(cssRequest));


  }
}
