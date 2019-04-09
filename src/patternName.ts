import { Id } from '@musical-patterns/id'
import { constantCaseToUpperCase } from '@musical-patterns/utilities'
import { Metadata } from './types'

const computePatternName: (parameters: { metadata: Metadata, newId: Id }) => string =
    ({ metadata, newId }: { metadata: Metadata, newId: Id }): string =>
        metadata.formattedName || constantCaseToUpperCase(newId || '')

export {
    computePatternName,
}
