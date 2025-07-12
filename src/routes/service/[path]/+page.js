import services from '../../../lib/services.json'

export function load(e) {
  let service = services.find(service => service.path == e.params.path)

  return {
    ...service,
  }
}