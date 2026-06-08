/**
 * Configuração pública da landing (segura para o browser).
 * ========================================================
 * Só exponha aqui valores que PODEM ser públicos. Tudo que tem prefixo
 * `NEXT_PUBLIC_` é embutido no bundle do cliente.
 *
 * `contactEmail` é o canal de contato exibido na página (link mailto no
 * rodapé). Defina em `.env.local` / na plataforma de deploy quando tiver o
 * email definitivo. Enquanto não houver, usamos um placeholder e o link de
 * contato simplesmente não aparece (ver Footer).
 */

/** Email de contato público, ou string vazia se ainda não configurado. */
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

/** Há um canal de contato configurado? */
export const hasContactEmail = contactEmail.length > 0;
