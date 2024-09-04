
export interface Config {
  /** Optional configurations for the azure plugin */
  /**
   * @visibility frontend
   */
  cloud?: {
    /** Optional configurations for the azure plugin */
    /**
     * @visibility frontend
     */
    azure?: {
      /**
       * The parameters of credentials.
       * @visibility frontend
       */
      credentials?: [
        {
          /**
         * The parameters of client_id.
         * @visibility frontend
         */
          client_id?: string;
          /**
           * The parameters of client_secret.
           * @visibility frontend
           */
          client_secret?: string;
          /**
         * The parameters of subscription.
         * @visibility frontend
         */
          subscription?: string;
        }
      ],
      /**
     * The parameters of cloud.
     * @visibility frontend
     */
      cloud?: {
        /**
 * The parameters of keyvault.
 * @visibility frontend
 */
        keyvault?: {
          /**
 * The parameters of vaultName.
 * @visibility frontend
 */
          vaultName?: string;
        }
      },
      /**
* The parameters of cloud2.
* @visibility frontend
*/
      cloud2?: [
        {
          /**
* The parameters of keyvault.
* @visibility frontend
*/
          keyvault?: {
            /**
* The parameters of vaultName.
* @visibility frontend
*/
            vaultName?: string;
          }
        }
      ]
    };
  };
}
