import Vue from '../../../../../../../../dist/wxavue.js'
import './wx-view.css'

export default Vue.Page({
  data:{

  },
  template: `
    <view class="page">
      <view class="page__hd">
        <text class="page__title">view</text>
        <text class="page__desc">弹性框模型分为弹性容器以及弹性项目。当组件的display为flex或inline-flex时，该组件则为弹性容器，弹性容器的子组件为弹性项目。</text>
      </view>
      <view class="page__bd">
        <view class="section">
          <view class="section__title">flex-direction: row</view>
          <view class="flex-wrp" style="flex-direction:row;">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">flex-direction: column</view>
          <view class="flex-wrp" style="height: 300px;flex-direction:column;">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">justify-content: flex-start</view>
          <view class="flex-wrp" style="flex-direction:row;justify-content: flex-start;">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">justify-content: flex-end</view>
          <view class="flex-wrp" style="flex-direction:row;justify-content: flex-end;">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">justify-content: center</view>
          <view class="flex-wrp" style="flex-direction:row;justify-content: center;">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">justify-content: space-between</view>
          <view class="flex-wrp" style="flex-direction:row;justify-content: space-between;">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">justify-content: space-around</view>
          <view class="flex-wrp" style="flex-direction:row;justify-content: space-around;">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">align-items: flex-end</view>
          <view class="flex-wrp" style="height: 200px;flex-direction:row;justify-content: center;align-items: flex-end">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
        <view class="section">
          <view class="section__title">align-items: center</view>
          <view class="flex-wrp" style="height: 200px;flex-direction:row;justify-content: center;align-items: center">
            <view class="flex-item bc_green"></view>
            <view class="flex-item bc_red"></view>
            <view class="flex-item bc_blue"></view>
          </view>
        </view>
      </view>
    </view>
  `
});
