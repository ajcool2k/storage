module.exports = (storageScope) => {
  var scope = 'default'

  init(storageScope)

  function init (storageScope) {
    if (typeof storageScope !== 'string') {
      console.warn('storage.init() - expected string as scope')
      return
    }

    scope = storageScope
  }

  function getItemLocal (id) {
    return localStorage.getItem(scope + '-' + id)
  }

  function hasItemLocal (id) {
    return localStorage.hasOwnProperty(scope + '-' + id)
  }

  function setItemLocal (id, content) {
    return localStorage.setItem(scope + '-' + id, content)
  }

  function removeItemLocal (id) {
    return localStorage.removeItem(scope + '-' + id)
  }

  function clearLocal () {
    const keys = Object.keys(localStorage)

    keys.forEach(key => {
      if (key.startsWith(scope + '-')) localStorage.removeItem(key)
    })
  }

  function getItemSession (id) {
    return sessionStorage.getItem(scope + '-' + id)
  }

  function hasItemSession (id) {
    return sessionStorage.hasOwnProperty(scope + '-' + id)
  }

  function setItemSession (id, content) {
    return sessionStorage.setItem(scope + '-' + id, content)
  }

  function removeItemSession (id) {
    return sessionStorage.removeItem(scope + '-' + id)
  }

  function clearSession () {
    const keys = Object.keys(sessionStorage)

    keys.forEach(key => {
      if (key.startsWith(scope + '-')) sessionStorage.removeItem(key)
    })
  }

  return {
    init: init,
    local: {
      hasOwnProperty: hasItemLocal,
      hasItem: hasItemLocal,
      getItem: getItemLocal,
      setItem: setItemLocal,
      removeItem: removeItemLocal,
      clear: clearLocal
    },
    session: {
      hasOwnProperty: hasItemSession,
      hasItem: hasItemSession,
      getItem: getItemSession,
      setItem: setItemSession,
      removeItem: removeItemSession,
      clear: clearSession
    }
  }
}
