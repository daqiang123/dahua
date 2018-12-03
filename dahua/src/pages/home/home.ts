/**
 *  版权所有（C）2018，西安大华时代网络科技有限公司。保留所有权利。
 */

/**
 * 	首页组件
 *
 *	@author 刘宏强
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slides = [
    {
      title: "大华科技",
      subtitle: "因为专业，所以信赖！",
      description: "大华科技有专业的团队和先进的技术，我们为客户提供优质的产品、热情的服务以及全面的技术支持！大华科技是知名软件企业，公司发展迅速，如果您对我们的产品和服务有兴趣，欢迎您在线留言或者来电咨询！",
      image: "assets/img/home.png",
    },
    {
      title: "大华科技",
      subtitle: "技术为根，服务为本！",
      description: "大华科技是技术型公司，尤其在IT行业，科学技术和科技人才领先是我们赖以生存的特点和基础！IT行业的特点决定服务是技术的延续，让客户放心，让客户满意，是我们服务的目标，也是公司的生存之本！",
      image: "assets/img/service.png",
    },
    {
      title: "大华科技",
      subtitle: "深耕细作，厚积薄发！",
      description: "大华科技依托十多年深厚的技术积淀、良好的市场口碑和广泛的客户关系，并发挥自身人力资源优势，提供优质的产品和服务！公司具备多项平台产品，多项获奖产品，多个行业信息化整体解决方案！",
      image: "assets/img/case.png",
    },
    {
      title: "大华科技",
      subtitle: "开放包容，合作共赢！",
      description: "大华科技坚持开放包容的心态，坚持合作共赢的理念，唯有开放才能进步，唯有包容才能让进步持久！公司真诚欢迎各界专家领导莅临参观、指导和洽谈业务！期待与广大有志之士合作共赢，共创辉煌!",
      image: "assets/img/about.png",
    },
    {
      title: "大华科技",
      subtitle: "诚信为本，厚德载物！",
      description: "大华科技坚持诚信为本的经营理念和厚德载物的企业文化！市场永远在变，诚信永远不变！天行健，君子以自强不息；地势坤，君子以厚德载物。",
      image: "assets/img/contact.png",
    }
  ];

}
