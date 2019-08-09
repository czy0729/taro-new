/*
 * @Author: czy0729
 * @Date: 2019-07-01 16:57:01
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-08-09 16:53:38
 */
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Component from '@components/component'
import CButton from '@base/c-button'
import CImage from '@base/c-image'
import Iconfont from '@base/iconfont'
import { push } from '@utils'
import { getWindowHeight } from '@utils/style'
import { rootCls, menuDS } from '../ds'
import './index.scss'

const cls = `${rootCls}__preview`

class Preview extends Component {
  static defaultProps = {
    onClose: Function.prototype
  }

  renderPlan() {
    return (
      <View className={`${cls}__plan flex`} onClick={() => push('')}>
        <View className='flex-1'>
          <View className={`${cls}__wrap`}>
            <Text className='t-24 l-40 t-c t-warning'>正在征集</Text>
          </View>
          <Text className='t-36 l-50 t-title t-b mt-8'>晒晒你家的照明方案</Text>
          <CButton
            className='mt-40'
            type='warning'
            text='点击参与'
            size='mini'
            style={{
              width: Taro.pxTransform(144)
            }}
          />
        </View>
        <View className={`${cls}__thumbs`}>
          <CImage
            src={require('../../assets/pages/index/13.png')}
            width={Taro.pxTransform(160)}
            radius
            style={{
              position: 'absolute',
              zIndex: 3,
              bottom: 0,
              right: 0
            }}
          />
          <CImage
            src={require('../../assets/pages/index/12.png')}
            width={Taro.pxTransform(80)}
            radius
            style={{
              position: 'absolute',
              zIndex: 2,
              top: 0,
              left: 0
            }}
          />
          <CImage
            src={require('../../assets/pages/index/11.png')}
            width={Taro.pxTransform(124)}
            radius
            style={{
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              marginTop: Taro.pxTransform(32),
              marginLeft: `-${Taro.pxTransform(48)}`,
              opacity: 0.5
            }}
          />
        </View>
      </View>
    )
  }

  renderPublish() {
    const { onClose } = this.props
    return (
      <View className={`${cls}__publish`}>
        <View className='flex'>
          {menuDS.map(item => (
            <View
              key={item.text}
              className={`${cls}__item flex flex-column flex-1`}
              onClick={() => {
                push(item.pagePath)
                setTimeout(() => {
                  onClose()
                }, 2000)
              }}
            >
              <View className='flex flex-justify-center'>
                <Iconfont className='t-52 t-title' name={item.icon} />
              </View>
              <Text className='t-26 l-48 t-title mt-16'>{item.text}</Text>
            </View>
          ))}
        </View>
        <View
          className={`${cls}__btn-close flex flex-justify-center`}
          onClick={onClose}
        >
          <Iconfont className='t-32 t-default' name='close' />
        </View>
      </View>
    )
  }

  render() {
    const { show } = this.props
    return (
      <View
        className={classNames(cls, {
          [`${cls}--show`]: show
        })}
        style={{
          height: getWindowHeight()
        }}
      >
        <View className={`${cls}__container`}>
          {this.renderPlan()}
          {this.renderPublish()}
        </View>
      </View>
    )
  }
}

export default Preview
